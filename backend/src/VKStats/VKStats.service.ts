import { Injectable } from '@nestjs/common';
import { VK } from 'vk-io';
import * as fs from 'fs';
import config from '../../env';

@Injectable()
export class VKStatsService {
  async getStats() {
    const publicId = 218041424;
    const vk = new VK({
      token: config.VK_TOKEN,
    });

    const result = await vk.api.execute({
      code: `
            var posts = API.wall.get({owner_id: -${publicId}, count: 10});
            var result = [];
            var i = 0;
            while(i < posts.items.length) {
                var post = posts.items[i];
                var likes = API.likes.getList({ type: 'post', owner_id: -${publicId}, item_id: post.id, count: 100, extended: 1 });
                var comments = API.wall.getComments({ owner_id: -${publicId}, post_id: post.id, count: 100, extended: 1 });
                result.push({
                    postId:post.id,
                    likes: likes.items,
                    comments: comments.items,
                    profiles: comments.profiles,
                });

                i = i + 1;
            }
            return result;  
        `,
    });

    const result2 = result.response.reduce((acc, post) => {
      const { postId, ...rest } = post;
      return { ...acc, [postId]: rest };
    }, {});
    let saved = {} as {
      [key: number]: { name: string; likes: any; comments: any; profiles: any };
    };
    try {
      saved = JSON.parse(fs.readFileSync('database.json').toString());
    } catch {}
    Object.assign(saved, result2);
    fs.writeFileSync('database.json', JSON.stringify(saved));

    const rating = {} as {
      [key: number]: { name: string; likes: number; comments: number };
    };
    Object.values(saved).forEach((post) => {
      post.likes.forEach((like) => {
        if (rating[like.id]) {
          rating[like.id].likes++;
        } else {
          rating[like.id] = {
            name: `${like.first_name} ${like.last_name}`,
            likes: 1,
            comments: 0,
          };
        }
      });

      post.comments.forEach((comment) => {
        if (rating[comment.from_id]) {
          rating[comment.from_id].comments++;
        } else {
          const profile = post.profiles.find(
            (profile) => profile.id === comment.from_id,
          );
          rating[comment.from_id] = {
            name: `${profile.first_name} ${profile.last_name}`,
            likes: 0,
            comments: 1,
          };
        }
      });
    });

    const rating2 = Object.values(rating);
    const rating3 = {};
    rating2.forEach((row) => {
      const { name, ...rest } = row;
      rating3[name] = rest;
    });

    return rating3;
  }
}

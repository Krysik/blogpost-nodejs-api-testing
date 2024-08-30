import { Post } from "./database/entities/Post";
import { createTestApp } from "./spec/testApp";
import { testDb } from "./spec/testDb";
import { expect } from 'chai';

describe('GET /posts', () => {
  it('should return a list of posts', async () => {
    const testApp = await createTestApp();
    const postRepo = testDb.getRepository(Post);

    const firstPost = await postRepo.save(
      postRepo.create({
        title: 'First post',
        content: 'My first post',
      })
    );
    const secondPost = await postRepo.save(
      postRepo.create({
        title: 'Second post',
        content: 'My second post',
      })
    );

    const response = await testApp.inject({
      method: 'GET',
      url: '/posts',
    });
  
    expect(response.statusCode).to.equal(200);
    
    const postResources = response.json().data;
    expect(postResources).to.have.deep.members([
      {
        id: firstPost.id,
        title: 'First post',
        content: 'My first post',
        createdAt: firstPost.createdAt.toISOString(),
      },
      {
        id: secondPost.id,
        title: 'Second post',
        content: 'My second post',
        createdAt: secondPost.createdAt.toISOString(),
      },
    ]);
  });

  it('should order posts by date of creation', async () => {
    const testApp = await createTestApp();
    const postRepo = testDb.getRepository(Post);

    const secondPost = await postRepo.save(
      postRepo.create({
        title: 'Second post',
        content: 'My second post',
        createdAt: new Date('2024-07-27 12:00:00'),
      })
    );
    const oldestPost = await postRepo.save(
      postRepo.create({
        title: 'Old post',
        content: 'My old post',
        createdAt: new Date('2024-06-15 10:05:00'),
      })
    );
    const latestPost = await postRepo.save(
      postRepo.create({
        title: 'Latest post',
        content: 'My latest post',
        createdAt: new Date('2024-07-27 15:00:00'),
      })
    );

    const response = await testApp.inject({
      method: 'GET',
      url: '/posts',
    });


    const postIds = response.json().data.map((post: any) => post.id);
    expect(postIds).to.be.deep.equal([
      latestPost.id,
      secondPost.id,
      oldestPost.id,
    ]);
  });
});
import PostClient from '../../api/clients/PostClient';
import DataGenerator from "../../utils/DataGenerator";
import { postSchema } from '../../schemas/postSchema';


describe('JSONPlaceholder API Tests', () => {

    before(() => {
        cy.loginViaApi('admin', 'password123')
    });

    context('Creating of the new content', () => {

        it('should fetch all posts', () => {
            PostClient.getPosts().then((response) => {
                console.log(response.body);
                expect(response.status).to.eq(200);
                expect(response.body).to.be.an('array');
                expect(response.body).to.have.lengthOf(100)

                const firstPost = response.body[0]
                expect(firstPost).to.have.property('id', 1)
                expect(firstPost.title).to.be.a('string')
            });
        });

        it('should fetch single post', () => {
            const postID = 5;
            PostClient.getSinglePost(postID).then(response => {
                console.log(response.body);
                expect(response.status).to.eq(200);
                expect(response.body.id).to.eq(postID)
            });
        });

        it('should back 404 error', () => {
            const postID = 999;
            PostClient.getSinglePost(postID).then(response => {
                console.log(response.body);
                expect(response.status).to.eq(404);
                expect(response.body).to.be.empty;
            });
        });

        it('should create new post', () => {
            const randomPost = DataGenerator.generatePost()
                    cy.apiCreatePost(randomPost).then((response) => {
                        expect(response.status).to.eq(201);
                        cy.validateSchema(postSchema,response.body)
                    });
        });
    });

    context('Updated the extinct data', () => {

        it('should update data', () => {

            PostClient.getSinglePost(1).then(response => {
                const originalData = response.body;

                const updatedData = {...originalData, title: 'Updated by Cypress'}

                PostClient.updatePost(1, updatedData).then(updateRes => {
                    expect(updateRes.status).to.eq(200)
                    expect(updateRes.body.title).to.eq('Updated by Cypress')
                });
            });
        });
    });

    context('Deleting of existing data', () => {

        it('should delete the existing data', () => {

            PostClient.getSinglePost(1).then(response => {
                const originalData = response.body;

                PostClient.deletePost(response.body.id).then(deleteRes => {
                    expect(deleteRes.status).to.eq(200);
                    expect(deleteRes.body).to.be.empty;
                });
            });
        });
    });

    context('Going throw all way POST/PUT/DELETE', () => {

            it('should perform POST/PUT/DELETE in a flat style', () => {
                cy.fixture('postData').as('myData');

                cy.get('@myData').then((data) => {
                    return PostClient.createPost(data);
                }).as('createdPost');

                cy.get('@createdPost').then((response) => {
                    const updatedData = { ...response.body, title: 'Updated title' };
                    return PostClient.updatePost(1, updatedData);
                }).as('updatedRes');

                cy.get('@updatedRes').then((res) => {
                    expect(res.status).to.eq(200);
                    expect(res.body.title).to.eq('Updated title');
                });
            });
    });

    it('should create post with dynamic token', () => {
        cy.apiCreatePost({title: 'Cool Post'})
    });
});
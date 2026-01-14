import { faker } from '@faker-js/faker';

class DataGenerator {
        static generatePost() {
            return {
                title: faker.lorem.sentence(),
                body: faker.lorem.paragraph(),
                userId: faker.number.int({min:1,max:10})
            }
        }
}
export default DataGenerator;
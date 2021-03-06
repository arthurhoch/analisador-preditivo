import { getFollowsFromG } from './follow';
import datasets from '../data-sets';

const createTest = (datasetKey) => {
    const { grammar, follows } = datasets[datasetKey];
    if (follows) {
        it(`get follows of data set ${datasetKey}`, () => {
            const generatedFollows = getFollowsFromG(grammar);
            // console.log('grammar', grammar)
            // console.log('generatedFollows', generatedFollows)
            // console.log('follows', follows)

            let resultado = {
                grammar,
                generatedFollows,
                follows
            }

            // console.log(JSON.stringify(resultado));

            for (const followKey in follows) {
                expect(generatedFollows[followKey]).toEqual(
                    expect.arrayContaining(follows[followKey])
                );
            }
        });
    }
}

// createTest('d2');
for (const datasetKey in datasets) {
    createTest(datasetKey);
}

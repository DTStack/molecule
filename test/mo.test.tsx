import molecule from 'mo';

describe('Test Mo Entry', () => {
    test('Instance the extensionService', () => {
        expect(molecule.extension).not.toBeNull();
    });
});

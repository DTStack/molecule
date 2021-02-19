import { extensionService } from 'mo';

describe('Test Mo Entry', () => {
    test('Instance the extensionService', () => {
        expect(extensionService).not.toBeNull();
    });
});

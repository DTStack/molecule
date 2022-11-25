import { AuxiliaryBarService } from 'mo/services';
import { container } from 'tsyringe';
import { AuxiliaryController } from '..';

const auxiliaryBarController = container.resolve(AuxiliaryController);
const auxiliaryBarService = container.resolve(AuxiliaryBarService);

describe('The AuxiliaryBar Controller', () => {
    test('Should support call onClick', () => {
        const original = auxiliaryBarService.setActive;
        auxiliaryBarService.setActive = jest.fn((props) => original(props));

        const clickFn = jest.fn();
        auxiliaryBarService.onTabClick(clickFn);

        auxiliaryBarController.onClick(1);
        expect(auxiliaryBarService.setActive).toBeCalledWith(1);
        expect(clickFn).toBeCalledWith(1);

        auxiliaryBarController.onClick(1);
        expect(auxiliaryBarService.setActive).toBeCalledWith(undefined);
        expect(clickFn).toBeCalledWith(1);

        auxiliaryBarService.setActive = original;
    });
});

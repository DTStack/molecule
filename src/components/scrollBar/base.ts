import {
    getBEMElement,
    getBEMModifier,
    prefixClaName,
} from 'mo/common/className';

export const baseClassName = prefixClaName('scrollBar');

export const scrollBarClassName = getBEMElement(baseClassName, 'wrapper');
export const scrollBarContainerClassName = getBEMElement(
    baseClassName,
    'container'
);
export const scrollBarShadowClassName = getBEMElement(baseClassName, 'shadow');
export const scrollBarTrackClassName = getBEMElement(baseClassName, 'track');
export const scrollBarThumbClassName = getBEMElement(baseClassName, 'thumb');

export const scrollBarContainerHorizontalClassName = getBEMModifier(
    scrollBarContainerClassName,
    'horizontal'
);

export const scrollBarContainerVerticalClassName = getBEMModifier(
    scrollBarContainerClassName,
    'vertical'
);

export const scrollBarTrackHiddenClassName = getBEMModifier(
    scrollBarTrackClassName,
    'hidden'
);

export const scrollBarTrackVerticalClassName = getBEMModifier(
    scrollBarTrackClassName,
    'vertical'
);

export const scrollBarTrackHorizontalClassName = getBEMModifier(
    scrollBarTrackClassName,
    'horizontal'
);

export const scrollBarShadowHiddenClassName = getBEMModifier(
    scrollBarShadowClassName,
    'hidden'
);

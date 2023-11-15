import placements from 'rc-dropdown/lib/placements';

export default {
    ...placements,
    rightTop: {
        points: ['tl', 'tr'],
        overflow: placements.top.overflow,
        offset: [0, -4],
        targetOffset: placements.top.targetOffset,
    },
};

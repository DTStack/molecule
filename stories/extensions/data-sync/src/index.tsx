import { activityBar } from 'mo';

export function activate() {
    const newItem = {
        id: '3333',
        iconName: 'codicon-sync',
        name: '数据同步',
    };
    console.log('extend a new activity bar item:', newItem);
    activityBar.push(newItem);
}

import * as React from "react";
import { Icon } from "mo/components/icon";
import { INotification } from "mo/model/notification";
import { INotificationController } from "mo/controller/notification";

export function Notification(props: INotification & INotificationController) {
    return (
        <Icon type="bell" />
    )
}
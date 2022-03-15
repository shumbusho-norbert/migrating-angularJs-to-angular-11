import { EventsNewComponent } from "./events/events-new/events-new.component";

export function checkCreateEventFormDirtyState(component: EventsNewComponent) {
    if (component.isFormDirty) {
        return window.confirm('You have not saved this event, do you want to cancel?');
    }
    return true;
}
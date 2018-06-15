import { Profile } from "./Profile";

export default class LunchHistoryItem {
    public currentUser: Profile;
    public selectedUser: Profile;
    public location: string;
    public date: Date;
    public time: Date;
}
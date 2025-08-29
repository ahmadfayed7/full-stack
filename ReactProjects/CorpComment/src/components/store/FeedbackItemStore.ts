import { create } from "zustand";
import { TfeedbackItem } from "../../lib/types";

type store = {
  feedbackItems: TfeedbackItem[];
  selectedTag: string;
  Loading: boolean;
  error: string;
  getFilteredFeedbackItems: () => TfeedbackItem[];
  getcomponylist: () => string[];
  fetchFeedbackItems?: () => Promise<void>;
  addItem: (text: string) => void;
  selectTag: (tag: string) => void;
};

export const useFeedbackItemStore = create<store>((set,get) => ({
  feedbackItems: [],
  selectedTag: "",
  Loading: false,
  error: "",
  getFilteredFeedbackItems: () => {
    const { feedbackItems, selectedTag } = get();
    return selectedTag
      ? feedbackItems.filter((item) => item.company === selectedTag)
      : feedbackItems;
  },
  getcomponylist: () => {
    const { feedbackItems } = get();
    return feedbackItems
      .map((item) => item.company)
      .filter((value, index, self) => self.indexOf(value) === index);
  },
  fetchFeedbackItems: async () => {
    set({ Loading: true });
    try {
      const res = await fetch(
        "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks"
      );
        if (!res.ok) {
        throw new Error();
      }
      const data = await res.json();
      set({ feedbackItems: data.feedbacks, Loading: false });
    } catch (error) {
      set({ Loading: false, error: "Failed to fetch feedback items" });
    }
  },
  addItem: (text: string) => {
    const { feedbackItems } = get();
     const compony=text.split(" ").find(word=>word.includes("#"))!.substring(1);
    const newFeedbackItem: TfeedbackItem = {
      id: new Date().getTime(),
      upvoteCount: 0,
      badgeLetter: compony.substring(0,1).toUpperCase(),
      company: compony,
      text,
      daysAgo: 0,
    };
    set({ feedbackItems: [...feedbackItems, newFeedbackItem] });
  },
  selectTag: (tag: string) => {
    set({ selectedTag: tag });
  },



}));
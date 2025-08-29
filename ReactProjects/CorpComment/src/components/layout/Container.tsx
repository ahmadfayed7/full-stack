import FeedbackList from '../feedback/FeedbackList'
import Header from '../layout/Header'
import { useFeedbackItemStore } from '../store/FeedbackItemStore';

export default function Container() {
  const addItem = useFeedbackItemStore((state) => state.addItem);
    const Loading = useFeedbackItemStore((state) => state.Loading);
  const error = useFeedbackItemStore((state) => state.error);
  const feedbackItems = useFeedbackItemStore((state) =>
    state.getFilteredFeedbackItems()
  );


  return (
   <main className="container">
    <Header addItem={addItem}/>
    <FeedbackList feedbackItems={feedbackItems} Loading={Loading} error={error} />
   </main>
  )
}

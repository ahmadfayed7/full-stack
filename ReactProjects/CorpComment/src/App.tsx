import Footer from './components/layout/Footer'
import Container from './components/layout/Container'
import HashTaglist from './components/hashtag/HashTaglist'
import { useFeedbackItemStore } from './components/store/FeedbackItemStore';
import { useEffect } from 'react';

function App() {
    const fetchFeedbackItems = useFeedbackItemStore(
    (state) => state.fetchFeedbackItems
  );

  useEffect(() => {
    if (fetchFeedbackItems) {
      fetchFeedbackItems();
    }
  }, [fetchFeedbackItems]);



  return (
    <div className="app">
      <Footer/>
      <Container />
      <HashTaglist  />
    </div>
  )
}

export default App

import CategoryTabs from './components/CategoryTabs';
import FilterBar from './components/FilterBar';
import PromptInput from './components/PromptInput';
import ResultHeader from './components/ResultHeader';
import SearchCard from './components/SearchCard';

const SearchResultPage = () => {
  return (
    <main className="flex min-h-screen justify-center">
      <div className="w-[684px]">
        <CategoryTabs />
        <FilterBar />
        <ResultHeader />

        <section>
          <SearchCard />
          <SearchCard />
          <SearchCard />
        </section>

        <PromptInput />
      </div>
    </main>
  );
};

export default SearchResultPage;

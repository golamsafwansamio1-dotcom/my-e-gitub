
import { use, useState } from 'react';
import Allissues from './Allissues';
import YourStack from './YourStack';

const Mainlayout = ({ datapromise }) => {
  const allissues = use(datapromise);

  const [selectedIssue, setSelectedIssue] = useState([]);

  
  const handleRemove = (id) => {
    const newStack = selectedIssue.filter(
      (item) => item.id !== id
    );

    setSelectedIssue(newStack);
  };

  
  const handleRemoveAll = () => {
    setSelectedIssue([]);
  };

  return (
    <>
      <div>
        <h2 className="text-2xl font-bold md:text-left">
          Explore the{' '}
          <span className="text-pink-600">Technologies</span>
        </h2>

        <p className="md:text-left">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <br />
      <br />

      <div className="grid grid-cols-12 gap-4">
        
        <div className="col-span-12 md:col-span-9">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mb-4">
            {allissues.map((issue) => (
              <Allissues
                key={issue.id}
                issue={issue}
                selectedIssue={selectedIssue}
                setSelectedIssue={setSelectedIssue}
              />
            ))}
          </div>
        </div>

        
        <div className="col-span-12 md:col-span-3">
          <YourStack
            stack={selectedIssue}
            onRemove={handleRemove}
            onRemoveAll={handleRemoveAll}
          />
        </div>
      </div>
    </>
  );
};

export default Mainlayout;

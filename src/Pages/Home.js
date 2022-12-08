/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ExpCard from '../Components/Card/ExpCard';
import SearchForm from '../Components/Form/SearchForm';
const Home = () => {
  const [loading, setLoading] = useState(false);
  const [expCard, setExpCard] = useState([]);
  useEffect(() => {
    fetch(`expdata.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setExpCard(data);
      });
  }, []);
  return (
    <div className="flex px-4">
      <div className="">
        <SearchForm />
      </div>
      <div className="p-6 flex-1 ">
        <p className="text-2xl pb-3">Home Cards</p>
        <div className="flex justify-between px-4">
          <p className="text-xl font-bold">Experiences</p>
          <Link to={'/comming-soon'} className="">
            <p className="font-bold text-xl">See All</p>
          </Link>
        </div>
        <div className="container mt-4 mx-auto">
          <div className="flex flex-wrap">
            {expCard.slice(0, 4).map((exp, i) => (
              <ExpCard key={i} exp={exp}></ExpCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

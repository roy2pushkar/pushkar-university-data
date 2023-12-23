import { useEffect, useState } from "react";

const useUniversities = (name) => {
  const [country, setCountry] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchUniversityInfo = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `http://universities.hipolabs.com/search?country=${name}`
        );
        const data = await response.json();
        setCountry(data);
        console.log(data);
      } catch (error) {
        console.log(error);
        setError("Universities data is not found for this country");
      } finally {
        setLoading(false);
      }
    };

    fetchUniversityInfo();
  }, [name]);

  return {
    loading,
    error,
    university,
  };
};

export default useUniversities;

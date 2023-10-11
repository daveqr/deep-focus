import { useEffect, useState } from "react";
import { GitHubUser } from "../User";

const useGithub = (username: string) => {
  const [user, setUser] = useState<GitHubUser | null>();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          "https://api.github.com/users/" + username
        );
        if (response.status === 403) {
          const data = await response.json();
          throw new Error(data.message);
        }

        const responseData = await response.json();
        setUser(responseData);
        setLoading(false);
        setError(null);
      } catch (error: any) {
        setLoading(false);
        setError(error.message);
      }
    };

    fetchData();

    //     fetch("https://api.github.com/users/" + username)
    //       .then(async (response) => {
    //         if (response.status === 403) {
    //           const data = await response.json();
    //           throw new Error(data.message);
    //         }
    //         return response.json();
    //       })
    //       .then((result) => {
    //         setUser(result);
    //         setError(null);
    //       })
    //       .catch((error) => {
    //         setError(error.message);
    //       });
  }, [username]);

  return { user, loading, error };
};

export default useGithub;

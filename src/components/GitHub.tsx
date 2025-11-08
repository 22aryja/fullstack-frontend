import { githubApi } from '@/services/requests/github';
import type { GitHubItem, GitHubReponse } from '@/types/github';
import { useQuery } from '@tanstack/react-query';
import { useState, type FC, type ReactNode } from 'react';

const GitHub: FC = () => {
    const [searchInput, setSearchInput] = useState<string>('');
    // const [repos, setRepos] = useState<GitHubReponse | null>(null);

    // const getRepos = useCallback(async () => {
    //     const response: GitHubReponse = await githubApi.getRepos(searchInput);
    //     setRepos(response);
    //     return response;
    // }, [searchInput]);

    // useEffect(() => {
    //     getRepos();
    // }, [getRepos]);

    const getRepos = async () => {
        const response: GitHubReponse = await githubApi.getRepos(searchInput);

        return response;
    };

    const { data: repos } = useQuery({
        queryKey: ['repos', searchInput],
        queryFn: getRepos,
    });

    const renderRepos = (): ReactNode => {
        if (!repos) return null;
        if (!repos.items) return null;

        return repos.items.map((item: GitHubItem) => (
            <div
                key={item.id}
                className="flex w-full justify-between items-center p-4 border border-solid border-gray-200 rounded-md"
            >
                <div className="flex gap-4 items-center">
                    <img src={item.owner.avatar_url} className="w-16 h-16" />
                    <div>
                        <h1 className="font-semibold text-lg">{item.name}</h1>
                        <h2>{item.full_name}</h2>
                    </div>
                </div>

                <a className="text-blue-400 underline" href={item.url}>
                    {item.url}
                </a>
            </div>
        ));
    };

    return (
        <section className="flex flex-col gap-16 w-full">
            <input
                className="outline-none border border-solid border-gray-200 rounded-md px-4 py-2 w-1/4"
                value={searchInput}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setSearchInput(event.target.value);
                }}
            />

            <div className="flex flex-col gap-4 p-4 w-full justify-center">
                {repos ? renderRepos() : <span className='w-full flex justify-center text-gray-400 text-4xl'>No results found...</span>}
            </div>
        </section>
    );
};

export default GitHub;

import { githubApi } from '@/services/requests/github';
import type { GitHubItem, GitHubReponse } from '@/types/github';
import {
    useCallback,
    useEffect,
    useState,
    type FC,
    type ReactNode,
} from 'react';

const GitHub: FC = () => {
    const [searchInput, setSearchInput] = useState<string>('');
    const [repos, setRepos] = useState<GitHubReponse | null>(null);

    const getRepos = useCallback(async () => {
        const response: GitHubReponse = await githubApi.getRepos(searchInput);
        setRepos(response);
        return response;
    }, [searchInput]);

    useEffect(() => {
        getRepos();
    }, [getRepos]);

    useEffect(() => {
        console.log(repos);
    }, [repos]);

    const renderRepos = (): ReactNode => {
        if (!repos) return null;
        if (!repos.items) return null;

        return repos.items.map((item: GitHubItem) => (
            <div>
                <h1>{item.name}</h1>
                <h2>{item.full_name}</h2>
                <img src={item.owner.avatar_url} />
                <p>{item.url}</p>
            </div>
        ));
    };

    return (
        <section>
            <input
                value={searchInput}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setSearchInput(event.target.value);
                }}
            />

            <div className="flex flex-col gap-4">
                {repos ? renderRepos() : <span>No results found</span>}
            </div>
        </section>
    );
};

export default GitHub;

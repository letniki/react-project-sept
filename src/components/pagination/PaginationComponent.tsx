import {useSearchParams} from "react-router-dom";

type PaginationComponentType ={
    lastPage: number;
}

export const PaginationComponent = ({lastPage}: PaginationComponentType) => {
    const [searchParams, setSearchParams] = useSearchParams({page:'1'});
    let currentPage = Number(searchParams.get('page') || '1');
    return (
        <div>
                <button disabled={currentPage <= 1} onClick={() => {
                    if (currentPage > 1) {
                        setSearchParams({page: (--currentPage).toString()})
                    }
                }}>prev
                </button>
                <button disabled={currentPage >= lastPage} onClick={() => {
                    setSearchParams({page: (++currentPage).toString()})
                }}>next
                </button>
        </div>
    );
};


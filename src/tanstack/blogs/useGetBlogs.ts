
import  { useQuery } from 'react-query'
import { Blog } from "./types";
import { useEffect } from 'react';

const getCategorieBlogs = async (payload: {
  category_id: number;
  page: number;
}): Promise<Blog[]> => {
  const response = await api.get<Blog[]>(
    /contents?filter[content_type_id]=3&filter[category_id]=${payload.category_id}&page=${payload.page}
  );
  return response.data;
};


// USE HOOK
export const useGetCategorieBlogs = (payload: {
  category_id: number;
  page: number;
}) => {
  return useQuery("getCategorieBlogs", () => getCategorieBlogs(payload));
};



// ONDA SE NEGDE POZIVA ----------------------------------------
 const {
    data: allBlogs,
    isLoading,
    refetch,
    isRefetching,
  } = useGetCategorieBlogs({
    category_id: categorie.id,
    page,
  })

  useEffect(() => {
    if(allBlogs) {
        setAllBlogs(allBlos)
    }
  },[allBlogs])

  // MOZE I REFETCH DA SE RADI AKO SE MENJA PAGE 
  useEffect(() => {
    refetch()
  },[page])
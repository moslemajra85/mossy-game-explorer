/**
 *
 * Since the genres will not changes we can inject statically
 * inject genres instead of fecthing them from a remote server
 */

//import useData from './useData';
import genres from '../data/genres';

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

//const useGenres = () => useData<Genre>('/genres');
const useGenres = () => ({ data: genres, isLoading: null, error: null });

export default useGenres;

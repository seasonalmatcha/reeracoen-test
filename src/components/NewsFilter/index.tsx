import { useDispatch, setNewsPeriod, setNewsType, useSelector } from '@/store';
import { NewsPeriod, NewsType } from '@/types';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Stack } from '@mui/material';

export const NewsFilter = () => {
  const { period, type } = useSelector((state) => state.newsFilter);
  const dispatch = useDispatch();

  const onFilterChange = (key: 'type' | 'period') => {
    return (e: SelectChangeEvent) => {
      switch (key) {
        case 'period':
          dispatch(setNewsPeriod(e.target.value as NewsPeriod));
          break;
        case 'type':
          dispatch(setNewsType(e.target.value as NewsType));
          break;
        default:
          break;
      }
    };
  };

  return (
    <Stack direction="row" spacing={2}>
      <FormControl size="small">
        <InputLabel id="news-period-label">Last period</InputLabel>
        <Select
          label="news-period-select"
          labelId="news-period-label"
          value={period}
          onChange={onFilterChange('period')}
          sx={{ minWidth: '100px' }}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={7}>7</MenuItem>
          <MenuItem value={30}>30</MenuItem>
        </Select>
      </FormControl>
      <FormControl size="small">
        <InputLabel id="news-type-label">Popular by</InputLabel>
        <Select
          label="news-type-select"
          labelId="news-type-label"
          value={type}
          onChange={onFilterChange('type')}
          sx={{ minWidth: '100px' }}
        >
          <MenuItem value="viewed">Views</MenuItem>
          <MenuItem value="shared">Share</MenuItem>
          <MenuItem value="emailed">Email</MenuItem>
        </Select>
      </FormControl>
    </Stack>
  );
};

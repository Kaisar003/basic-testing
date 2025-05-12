// Uncomment the code below and write your tests
import axios from 'axios';
import { throttledGetDataFromApi } from './index';

jest.mock('axios');

describe('throttledGetDataFromApi', () => {
  const mockedAxios = axios as jest.Mocked<typeof axios>;

  test('should create instance with provided base url', async () => {
    const relativePath = '/posts';
    await throttledGetDataFromApi(relativePath);

    expect(mockedAxios.create).toHaveBeenCalledWith({
      baseURL: 'https://jsonplaceholder.typicode.com',
    });
  });

  test('should perform request to correct provided url', async () => {
    const relativePath = '/posts';
    mockedAxios.create.mockReturnValue(mockedAxios);
    mockedAxios.get.mockResolvedValue({ data: {} });

    await throttledGetDataFromApi(relativePath);

    expect(mockedAxios.get).toHaveBeenCalledWith(relativePath);
  });

  test('should return response data', async () => {
    const relativePath = '/posts';
    const mockData = [{ id: 1, title: 'Test Post' }];
    mockedAxios.create.mockReturnValue(mockedAxios);
    mockedAxios.get.mockResolvedValue({ data: mockData });

    const result = await throttledGetDataFromApi(relativePath);

    expect(result).toEqual(mockData);
  });
});

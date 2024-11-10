import { Project } from '../utils/types';
import { ApiResponse } from './types';

export class ContentApiClient {
  private baseUrl: string;

  constructor() {
    this.baseUrl = import.meta.env.VITE_CONTENT_API_BASE_URL;
  }

  async getAllProjects(): Promise<ApiResponse<Array<Project>>> {
    const response = await fetch(`${this.baseUrl}/Projects/Get`, {
      method: 'GET',
    });
    try {
      if (!response.ok) {
        return {
          code: response.status,
          error: `Failed with status ${response.status}`,
        };
      }
      const data: Array<Project> = await response.json();
      return { code: response.status, data };
    } catch (error) {
      return {
        code: 500,
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  }
}

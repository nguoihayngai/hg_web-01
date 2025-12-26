
export interface Achievement {
  year: string;
  title: string;
  description: string;
}

export interface Facility {
  name: string;
  image: string;
  description: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface GroundingSource {
  title?: string;
  uri?: string;
}

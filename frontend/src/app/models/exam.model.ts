export interface Exam {
  id?: string;

  student: {
    first_name: string;
    last_name: string;
  };
  meeting_point: string;
  date: string; // format ISO ou custom
  time: string; // e.g. "14h"
  status: 'confirmed' | 'to_organize' | 'cancelled' | 'searching'; // valeur pour l’icône
}
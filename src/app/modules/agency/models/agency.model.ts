export interface AgencyModel {
  agencia: string;
  distrito: string;
  provincia: string;
  departamento: string;
  direccion: string;
  lat: number;
  lon: number;
  photo?: string;
  favorite?: boolean;
}

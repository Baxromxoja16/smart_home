export interface SensorValue {
  amount: number | string;
  unit: string;
}

export type CardItem = DeviceItem | SensorItem;

export interface DeviceItem {
  type: 'device';
  icon: string;
  label: string;
  state: boolean;
}

export interface SensorItem {
  type: 'sensor';
  icon: string;
  label: string;
  value: SensorValue;
}

export interface DashboardCard {
  id: string;
  title: string;
  layout: 'horizontalLayout' | 'verticalLayout' | 'singleDevice';
  items: CardItem[];
}

export interface DashboardTab {
  id: string;
  title: string;
  cards: DashboardCard[];
}

export interface MockData {
  tabs: DashboardTab[];
}

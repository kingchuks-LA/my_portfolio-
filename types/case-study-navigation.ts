export interface NavigationItem {
  id: string;
  label: string;
}

export interface NavigationGroup {
  title: string;
  items: NavigationItem[];
}
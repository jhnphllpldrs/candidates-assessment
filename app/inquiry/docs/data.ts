export interface MedicalStaffingOption {
    readonly value: string;
    readonly label: string;
  }
  
  export const medicalStaffingOptions: readonly MedicalStaffingOption[] = [
    { value: 'Assisted Living', label: 'Assisted Living'},
    { value: 'Home Care', label: 'Home Care'},
    { value: 'Home Health', label: 'Home Health'},
    { value: 'Independent Living/Retirement Community', label: 'Independent Living/Retirement Community'},
  ];
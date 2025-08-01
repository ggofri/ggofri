export const formatDate = (date: Date): string => {
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const year = date.getFullYear();
  return `${month}-${day}-${year}`;
};

export const createFilename = (name: string): string => 
  `${name} Resume.pdf`;

export const parseVersionFromArgs = (args: string[]): string => {
  const versionIndex = args.findIndex(arg => arg === '--version');
  return versionIndex !== -1 && args[versionIndex + 1] 
    ? args[versionIndex + 1] 
    : 'main';
};

import type { NameAndDirectoryFormat } from '@nx/devkit/src/generators/artifact-name-and-directory-utils';

export interface Schema {
  directory: string;
  name?: string;
  nameAndDirectoryFormat?: NameAndDirectoryFormat;
  displayBlock?: boolean;
  inlineStyle?: boolean;
  inlineTemplate?: boolean;
  standalone?: boolean;
  viewEncapsulation?: 'Emulated' | 'None' | 'ShadowDom';
  changeDetection?: 'Default' | 'OnPush';
  style?: 'css' | 'scss' | 'sass' | 'less' | 'none';
  skipTests?: boolean;
  type?: string;
  skipImport?: boolean;
  selector?: string;
  module?: string;
  skipSelector?: boolean;
  export?: boolean;
  prefix?: string;
  skipFormat?: boolean;
}

export interface NormalizedSchema extends Schema {
  directory: string;
  filePath: string;
  projectName: string;
  projectSourceRoot: string;
  projectRoot: string;
  selector: string;

  fileName: string;
  symbolName: string;
}

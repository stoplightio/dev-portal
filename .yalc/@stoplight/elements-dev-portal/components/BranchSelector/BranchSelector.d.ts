import { Branch } from '../../types';
export declare type BranchSelectorProps = {
    branchSlug: string;
    branches: Branch[];
    onChange: (branch: Branch) => void;
};
export declare const BranchSelector: ({ branchSlug, branches, onChange }: BranchSelectorProps) => JSX.Element;

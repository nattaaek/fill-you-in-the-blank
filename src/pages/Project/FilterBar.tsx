import React, { useState } from "react";
import { Autocomplete, Box, TextField } from "@mui/material";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import BangkokPolicyCategory from "../../common/constants/BangkokPolicyCategory";

interface FilterBarProps {
  mayorPolicies: Record<number, string>;
  sdgs: string[];
  onFilter: (selectedPolicies: string[], selectedSdgs: string[]) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({
  mayorPolicies,
  sdgs,
  onFilter,
}) => {
  const [selectedPolicies, setSelectedPolicies] = useState<string[]>([]);
  const [selectedSdgs, setSelectedSdgs] = useState<string[]>([]);
  const { t } = useTranslation();

  const handleFilter = (): void => {
    onFilter(selectedPolicies, selectedSdgs);
  };

  const translatedBangkokPolicyCategory = Object.values(BangkokPolicyCategory).map((policy) => t(policy)) 

  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
    <Autocomplete
        multiple
        id="policies-filter"
        options={translatedBangkokPolicyCategory}
        getOptionLabel={(option) => option}
        onChange={(_event, newInputValue) => {
            setSelectedPolicies(newInputValue);
        }}
        sx={{ width: 300 }}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            label="Filter by Mayor Policy"
            placeholder="Policy"
          />
        )}
    />
    <Autocomplete
        multiple
        id="sdgs-filter"
        options={sdgs}
        getOptionLabel={(option) => option}
        onChange={(_event, newInputValue) => {
            setSelectedSdgs(newInputValue);
        }}
        sx={{ width: 300 }}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            label="Filter by SDG"
            placeholder="SDG"
          />
        )}
      />
      <button onClick={handleFilter}>Filter</button>
    </Box>
  );
};

export default FilterBar;

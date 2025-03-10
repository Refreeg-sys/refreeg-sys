import { FC, useState } from 'react';
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Search } from "lucide-react";

interface SearchModalProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onSearch: () => void;
}

const SearchModal: FC<SearchModalProps> = ({ searchQuery, setSearchQuery, onSearch }) => {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
      <button
        className="flex items-center gap-1 p-2 transition"
        onClick={() => setOpen(!open)}
      >
        <Search className="h-5 w-5 text-gray-600" />
        <span className="hidden lg:inline-block">Search</span>
      </button>

      </PopoverTrigger>

      <PopoverContent className="w-72 p-2 bg-white shadow-lg rounded-md border">
        <Command>
          <CommandInput
            placeholder="Search for a cause..."
            value={searchQuery}
            onValueChange={(value) => setSearchQuery(value)}
          />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Categories">
              <CommandItem onSelect={() => console.log("Food Related selected")}>Food Related Causes</CommandItem>
              <CommandItem onSelect={() => console.log("Education Related selected")}>Education Related Causes</CommandItem>
              <CommandItem onSelect={() => console.log("Funds related selected")}>Funds related Causes</CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default SearchModal;

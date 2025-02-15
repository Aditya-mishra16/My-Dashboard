import React, { useState } from "react";
import { Button, TextField, Tabs, Tab, IconButton } from "@mui/material";
import {
  Call,
  Email,
  Event,
  Schedule,
  AccessTime,
  Search,
} from "@mui/icons-material";

const ActivityForm = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="bg-white p-3 pt-0 w-full max-w-md border">
      {/* Tabs Section */}
      <Tabs
        value={activeTab}
        onChange={(e, newValue) => setActiveTab(newValue)}
        variant="fullWidth"
        className="border-b"
        TabIndicatorProps={{
          style: {
            backgroundColor: "#0E2A47",
            height: "3px", 
          },
        }}
      >
        <Tab label="Activity" className="text-black font-medium text-xs" />
        <Tab label="Actionables" className="text-gray-500 text-xs" />
        <Tab label="Tasks" className="text-gray-500 text-xs" />
        <Tab label="Note & File" className="text-gray-500 text-xs" />
      </Tabs>

      {/* Action Buttons */}
      <div className="flex space-x-2 mt-3">
        <Button
          variant="contained"
          startIcon={<Call />}
          size="small"
          sx={{
            backgroundColor: "#E6F4EA",
            color: "#137333",
            "&:hover": { backgroundColor: "#D4EDDA" },
          }}
        >
          Log a Call
        </Button>
        <Button variant="outlined" startIcon={<Email />} size="small">
          Email
        </Button>
        <Button variant="outlined" startIcon={<Event />} size="small">
          Event
        </Button>
      </div>

      {/* Form Inputs */}
      <div className="mt-3 space-y-3">
        <TextField
          label="Subject *"
          fullWidth
          variant="outlined"
          size="small"
        />

        <div className="grid grid-cols-2 gap-2">
          <TextField
            label="Add Team Member"
            fullWidth
            variant="outlined"
            size="small"
            InputProps={{
              endAdornment: (
                <IconButton size="small">
                  <Search fontSize="small" />
                </IconButton>
              ),
            }}
          />
          <TextField
            label="Add Contact"
            fullWidth
            variant="outlined"
            size="small"
            InputProps={{
              endAdornment: (
                <IconButton size="small">
                  <Search fontSize="small" />
                </IconButton>
              ),
            }}
          />
        </div>

        <div className="grid grid-cols-2 gap-2">
          <TextField
            label="Due Date *"
            fullWidth
            variant="outlined"
            size="small"
            InputProps={{
              endAdornment: (
                <IconButton size="small">
                  <Schedule fontSize="small" />
                </IconButton>
              ),
            }}
          />
          <TextField
            label="Time *"
            fullWidth
            variant="outlined"
            size="small"
            InputProps={{
              endAdornment: (
                <IconButton size="small">
                  <AccessTime fontSize="small" />
                </IconButton>
              ),
            }}
          />
        </div>

        <TextField
          label="Description"
          fullWidth
          multiline
          rows={2}
          variant="outlined"
          size="small"
        />
      </div>

      {/* Submit Button */}
      <div className="mt-4 flex justify-end">
        <Button
          variant="contained"
          size="small"
          sx={{
            backgroundColor: "#0E2A47",
            "&:hover": { backgroundColor: "#0C2139" },
          }}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default ActivityForm;

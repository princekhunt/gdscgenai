# PPSU GDSC - GenAI 2024

###  What's Chnage in this Repository?
+ Python Automation Script Added that Automate tha Process of Updating Profile Badge of CloudSkillsboot Profile.

+ This Script can be used again & again or can be modified every badge updates.

### Features
+ Auto Backup of Every Data
+ Ignore IF Pathways Already Completed by Participants
+ Daily Single Commit After Run BOT
+ Public / Private Profile Detection
if  Public Profile then Update `"All Good"` other wise gives
`"Private Profile"` on `ProfileStatusElement` in `config.jsonc`
+ Force Check Every Profile Status (Public or Private) by Setting `ForceCheckProfileStatus` to `True` in `config.jsonc`

### How to Setup & Use ?
+ Just Install Python 3.10+ in your System
+ Run Command below 
```bash 
pip install -r requirements.txt
```
+ Run Command below 
```bash
python index.py
```

### Not Implemented
+ Redeem Status of Account
import nodriver as nodriver
import jsonc
import time
import os
from datetime import datetime
import re

# ? Import Data from Config File
with open('config.jsonc', 'r') as f:
    config = jsonc.load(f)

DateTimeFormet = datetime.now().strftime('%Y-%m-%d_%H-%M-%S')
DataFile: str = config['DataFile']
isDatabackup: bool = config['getBackup']
isIgnoreCompleted: bool = config['IgnoreCompleted']
ForceCheckProfileStatus: bool = config['ForceCheckProfileStatus']

# ? Elements
ProfileElement = config['ProfileElement']
ProfileStatusElement = config['ProfileStatusElement']
AllBadgesElement = config['AllBadgesElement']
BadgeElements: list = config['BadgeElements']
TotalBadgesElements = len(BadgeElements)

# ? Data File
if not os.path.exists(DataFile):
    raise Exception('Data File is not Exist!')

with open(DataFile, 'r') as f:
    data:list = jsonc.load(f)

# ! File Module

def createDir(path):
    if not os.path.exists(path):
        os.makedirs(path)
    else:
        pass


def copyFile(src, dest):
    createDir(os.path.dirname(dest))
    with open(src, 'r') as f:
        with open(dest, 'w') as f1:
            f1.write(f.read())

NewData = []

# ? Helper Functions
def getBackup():
    if isDatabackup is True:
        # ? Copy Data File to Backup Directory
        copyFile(DataFile, f'backup/{DateTimeFormet}.json')

def RemoveHTMLTags(text):
    clean = re.compile('<.*?>')
    return re.sub(clean, '', text)

# ? Main Function
async def main():
    getBackup()

    if len(data) == 0:
        print("All Pathways Completed by Users!")
        os._exit(0)

    browser = await nodriver.start(
        headless=False
    )

    for item in data:
        if isIgnoreCompleted is True:
            if ForceCheckProfileStatus is False:
                if item[AllBadgesElement] == "Yes":
                    NewData.append(item)
                    continue

        # ? Profile Element
        Profile = await browser.get(item[ProfileElement])
        time.sleep(5)

        # @ Profile Status Element 
        isProfilePrivate = await Profile.query_selector_all("[id='alert-message']")
        if len(isProfilePrivate) != 0:
            item[ProfileStatusElement] = "Private Profile"
            NewData.append(item)
            continue
        else:
            item[ProfileStatusElement] = "All Good"

        if isIgnoreCompleted is True:
            if ForceCheckProfileStatus is True:
                if item[AllBadgesElement] == "Yes":
                    NewData.append(item)
                    continue

        # @ Verify Badge Elements
        Badges = 0

        # ? Find Element with Class Attribute "[class='ql-title-medium l-mts']"
        ProfileBadgesList = await Profile.query_selector_all("[class='ql-title-medium l-mts']")

        if len(ProfileBadgesList) != 0:
            for BadgeElement in BadgeElements:
                for Badge in ProfileBadgesList:

                    # ? Extract Text from Element Text
                    Badge = RemoveHTMLTags(str(Badge))

                    # ? Check if Badge Element is in Badge
                    if BadgeElement['AcsessString'] in Badge:
                        Badges += 1
                        item[BadgeElement['Element']] = 1

        time.sleep(1)

        # @ Modify All Badges Element
        if Badges == TotalBadgesElements:
            item[AllBadgesElement] = "Yes"
        else:
            item[AllBadgesElement] = "No"

        # ? Append Data to NewData

        NewData.append(item)

    # ? Write Data to File
    with open(DataFile, 'w') as f:
        jsonc.dump(NewData, f)

if __name__ == '__main__':
    nodriver.loop().run_until_complete(main())

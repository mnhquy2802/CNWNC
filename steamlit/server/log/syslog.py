from typing import Dict, List

class LogSystem():
    LogSession : List[Dict]
    ListLogExport : List[str]


    def __init__(self):
        return None
    

    def save_log(self, path_log):
        for row_in_log in self.LogSession:
            self.ListLogExport.append(self.export_line_log(row_in_log))

        with open(path_log, 'w') as f:
            ################################
            ######### Log txt file #########
            f.writelines(self.ListLogExport)

        ####################################
        ######## Log save database #########

        return False


    def export_line_log(self):
        return None


    def push_log(self):
        return None
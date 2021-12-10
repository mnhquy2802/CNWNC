class BCOLOR:
    HEADER = '\033[95m'
    OKBLUE = '\033[94m'
    OKCYAN = '\033[96m'
    OKGREEN = '\033[92m'
    WARNING = '\033[93m'
    FAIL = '\033[91m'
    ENDC = '\033[0m'
    BOLD = '\033[1m'
    UNDERLINE = '\033[4m'

    @staticmethod
    def warning(line):
        print('\033[93m' + f"{line}" + '\033[0m' )


    @staticmethod
    def header(line):
        print('\033[95m' + f"{line}" + '\033[0m' )


    @staticmethod
    def okblue(line):
        print('\033[94m' + f"{line}" + '\033[0m' )


    @staticmethod
    def underline(line):
        print('\033[4m'  + f"{line}" + '\033[0m' )
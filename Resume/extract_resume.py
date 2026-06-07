from PyPDF2 import PdfReader
reader = PdfReader('Hari Saravanan Resume.pdf')
for i, page in enumerate(reader.pages, 1):
    print('--- PAGE %d ---' % i)
    print(page.extract_text())

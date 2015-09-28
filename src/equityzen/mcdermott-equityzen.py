alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

def get_missing_letters(inputStr):
  missingLetters = alphabet[:]
  output = '';
  for c in inputStr.lower():
    if c in missingLetters:
      missingLetters.remove(c)
  return ''.join(missingLetters)

print(get_missing_letters('A quick brown fox jumps over the lazy dog'))
print(get_missing_letters('A slow yellow fox crawls under the proactive dog'))
print(get_missing_letters('Lions, and tigers, and bears, oh my!'))
print(get_missing_letters(''))


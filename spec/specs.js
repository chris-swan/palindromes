describe('palindromes', function() {
  it("reads the same forwards as backwards", function() {
    expect(palindromes("bob")).to.equal(true);
  });

  it("removes spaces", function() {
    expect(palindromes("atoy a yota")).to.equal(true);
  });

  it("removes punctuation", function() {
    expect(palindromes("a toyota's a toyota")).to.equal(true);
  });

  it("removes capitalization", function() {
    expect(palindromes("A Toyota's a toyota")).to.equal(true);
  });

  it("works on numbers", function() {
    expect(palindromes("1001001")).to.equal(true);
  });
});

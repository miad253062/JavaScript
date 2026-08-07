const applyDicsount = (prices, rate = 0) => {
  if (prices && Array.isArray(prices) && prices.length !== 0) {
    return prices.map((price) => {
      return price - (price * rate) / 100;
    });
  }
  return "Invalid";
};

const getPassingStudents = (students, threshold = 33) => {
  if (students && Array.isArray(students) && students.length !== 0) {
    return students.filter((student) => {
      return student.marks >= threshold;
    });
  }
  return "Invalid";
};

const findUserById = (users, id) => {
  return (
    users.find((user) => {
      return user.id === id;
    }) || "User not find"
  );
};

const getCartTotal = (carts) => {
  const total = carts.reduce((acc, currentValue) => {
    return acc + currentValue.price * currentValue.qty;
  }, 0);
  let priceAndQuantity = carts.map((cart) => {
    return `${cart.price}*${cart.qty}`;
  });
  return `${total} (${priceAndQuantity.join(" + ")})`;
};

//-------------------Practice Task-----------------------

const getFormattedPrices = (prices) => {
  if (prices && Array.isArray(prices) && prices.length !== 0) {
    return prices.map((price) =>
      typeof price === "number" ? `$${price}` : "$0",
    );
  }
  return "Invalid";
};

const getAvailableProducts = (products) => {
  if (products && Array.isArray(products) && products.length !== 0) {
    const inStock = products.filter((product) => {
      return (
        product.hasOwnProperty("name") &&
        product.hasOwnProperty("stock") &&
        product.stock > 0
      );
    });
    return inStock;
  }
  return "Invalid";
};

const findProductByName = (products, name) => {
  if (products && Array.isArray(products) && products.length !== 0) {
    return (
      products.find((product) => product.name === name) || "Product not found!"
    );
  }
  return "Invalid";
};

const getTotalStockValue = (products) => {
  if (products && Array.isArray(products) && products.length !== 0) {
    return products
      .filter(
        (product) =>
          product.hasOwnProperty("price") && product.hasOwnProperty("stock"),
      )
      .reduce((acc, currentValue) => {
        return acc + currentValue.price * currentValue.stock;
      }, 0);
  }
  return "Invalid";
};

const getDiscountedTotalForCategory = (products, category) => {
  if (products && Array.isArray(products) && products.length !== 0) {
    return products
      .filter(
        (product) =>
          product.hasOwnProperty("price") &&
          product.hasOwnProperty("category") &&
          product.category === category,
      )
      .map((product) => product.price - (product.price * 10) / 100)
      .reduce((acc, currentValue) => {
        return acc + currentValue;
      }, 0);
  }
  return "Invalid";
};

const createIdGenerator = () => {
  let id = 0;

  return () => {
    id++;
    return id;
  };
};

const sortByPriceAscending = (products) => {
  if (products && Array.isArray(products) && products.length !== 0) {
    return products
      .filter((product) => product.hasOwnProperty("price"))
      .sort((a, b) => a.price - b.price);
  }
  return "Invalid";
};

const applyBonusPoints = (users, bonus) => {
  if (users && Array.isArray(users) && users.length !== 0) {
    return users
      .filter((product) => product.hasOwnProperty("points"))
      .map((user) => {
        return { ...user, points: user.points + bonus };
      });
  }
  return "Invalid";
};

const isStrictMatch = (input, target) => {
  return input === target;
};

const getTopSellingProduct = (orders) => {
  let validResult = orders.filter(
    (order) =>
      order.hasOwnProperty("product") && order.hasOwnProperty("unitsSold"),
  ).reduce((acc, currentValue) => {
    if(acc[currentValue.product]){
      acc[currentValue.product] += currentValue.unitsSold;
    }else{
      acc[currentValue.product] = currentValue.unitsSold;
    }
    return acc;

  }, {})

  const bestSelling = Object.entries(validResult).sort((a, b) => b[1] - a[1])[0][0];

  return bestSelling;

}


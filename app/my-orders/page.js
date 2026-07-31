"use client";

import Footer from "@/components/Footer";
import Loading from "@/components/Loading";
import Navbar from "@/components/Navbar";
import { useAppContext } from "@/context/AppContext";
import { assets } from "@/lib/assets";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const MyOrders = () => {
  const { currency, getToken, user } = useAppContext();

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = async () => {
    try {
      const token = await getToken();

      const { data } = await axios.get("/api/order/list", {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (data.success) {
        setOrders(data.orders);
        setLoading(false);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (!user) return;
    fetchOrders();
    window.addEventListener("focus", fetchOrders);
    return () => window.removeEventListener("focus", fetchOrders);
  }, [user]);

  return (
    <main>
      <Navbar />
      <section className="flex flex-col justify-between px-6 md:px-16 lg:px-32 py-6 min-h-screen">
        <div className="space-y-5">
          <h2 className="text-lg font-medium mt-6">My Orders</h2>
          {loading ? (
            <Loading />
          ) : (
            <div className="max-w-5xl border-t border-gray-300 text-sm">
              {orders.map((order, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row gap-5 justify-between p-5 border-b border-gray-300"
                >
                  <div className="flex-1 flex gap-5 max-w-80">
                    <Image
                      className="max-w-16 max-h-16 object-cover"
                      src={assets.box_icon}
                      alt="box-icon"
                    />
                    <p className="flex flex-col gap-3">
                      <span className="font-medium text-base">
                        {order.items
                          .map(
                            (item) => item.product.name + ` x ${item.quantity}`,
                          )
                          .join(", ")}
                      </span>
                      <span>Items : {order.items.length}</span>
                    </p>
                  </div>
                  <div>
                    <p>
                      <span className="font-medium">
                        {order.address.fullName}
                      </span>
                      <br />
                      <span>{order.address.area}</span>
                      <br />
                      <span>{`${order.address.city}, ${order.address.state}`}</span>
                      <br />
                      <span>{order.address.phoneNumber}</span>
                    </p>
                  </div>
                  <p className="font-medium my-auto">
                    {currency}
                    {order.amount}
                  </p>
                  <div>
                    <p className="flex flex-col">
                      <span>Method : COD</span>
                      <span>
                        Date : {new Date(order.date).toLocaleDateString()}
                      </span>
                      <span>Payment : Pending</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default MyOrders;

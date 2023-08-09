const source = "v4eRkxMF4fbDgixnu11sfb+Mc0Sop551pt84DwFS3uIXqhjbd3c9K6iq7MpPmd7Xsnh+kakBnFbuNW1Igij1rm23IoJDD41217JbmvYdmvMnSsa+gKQq0mXGrZjfQqOdqYbUoRBImqXxoDJGZCNiU+C1zt/uQtjnrFXTaKq/lkvu8zItodbryNym7o47ZDqHIvoW7jCXUD5hFufapOQdQpBpXNzuHP8mPcD4SsqKSYELIRUuhBVXBtW1dFJbSPFTwBTP3wkV+IcdaX7D2hSfB1WZ+93UuQelvxxqEyujkBfw+ae6mvdq4vyqWjPMX11QUo20F3sDrqQz2ycQRLxDJHdWlRaAXp+YyTM6bBx6D7Jpuc4OgikcldvfTCFb8zJjAhddVw+C1RS8J1FziTX3R9wL2QBgcGQiXnfsoLqzIrIrLFRy+mI5g3PpYWP4PkcTQ0x2luJLqvZC5m6A/hdkiJFho01FDaIUp4x2mym0XhTtkDASx0tsleTr3rkcs4UcuehkmcgUykXQAKykAP0kgtewe5EYGJnuCdiBp210NFRwImqNmMI05l8yRdR5H2krc3lsnITkLnfabxYdbX+Z//8YhOg/bA4x0zHS+VsGOrCkSFRITCc5sFeup/QrJ4swA5Ei69YYegHd+k1hZj/arWvb88ipwbByJwMeyVNlVLFsZmWh/UbUftYprxBDbprU8VArxLU3FeBoy/GNVveHCZZ5CBsUpsPu7PW08IPz0xHHLpVlemQLzRnVq3MACafDA/CIqg7EtP2Iq+O93itQiJMYXEG419VJoaqZboXYQtiPMExiQ1yBY7wD8jOx7Ru4MBc3Sczv5toymE65joP4DCfe85f8+z9oInFKu2MnTtEocfZRJ7aN52TIFHKYFmAoiNMqY76cbcJdOn8DNAKS9FYU5FvTFO6LIqJz36fejcTmgqhETFjAtz+S6V9OZ6ofjch0+qsHsVENLYbYqP1SatyqYejndHN0nF6Ukc57P/s2aFzlRcuTf8jaMkb0PtwodEHnkjfD0dde4ix+4mtC8f8vHuQoSSlYWuHEx95LinYZ1+laPP2dga1nkTuf2XeQ3GqsRP1I95B6dvNM75N7mlita4TOhHgwu3o26vRBE0Qz7AmVNldKPjG5nCZ5W0ISmbq/l8CfSMnq+AOvX9SQCrRLVagPDjXE47OYLaMH0MN0yJUXgT7FnZI1Ugec/Tnosp2l/BI2olbPW2FXGxYzIjx5eVSH8kXQYcnNawuyiazV7FiMokUP5Xwn7zdsMU2cRYCa85fbA6P8ZUk3k7XIyNPi18iGdAyWr7Grw3qLe11wLn/hJLmT7UnqskKCRKG2clDWguTWDFDmzqar2zcND8xKTERaZHYjPzfumwLUYPcXK2lcBudy7y0VeFNv20Vi3IV6Ti0K0Adw0ik+loUm9v5ftALjVBu3y2wPX4OrzdW/eaAWg8FeQbwcCP2WDRf4/JwUq1D2VHaOPuXQCxYcejxS0DD+t4uXaMNdyLo1YUB7Yg6CCb+Pp7tNqW1Dk61aLA82OQfB6PN5cBcPTDizEWBZ6GYteXIR+r/lGKKgTMmL5TzU+qeDIe9p5QwwDbSmFblx4wjIPep9IMUq0cT/ED5BCQHaayANZl2CxaVaeLxMyDBFjavdQayLkiwFuvrnqH9vb4w5t1gX6l61bFwKiWlvjJFA3C0/xDyUcaqQXVK0ommVRiJ2/rCs0yzJc6agA/48etoxtm2O56KTAUzbk6AwcKJgYPjnM+vUBRBnqjoZCV7RVPhGwbXSA0WBYeOa1eNBxAi7gX/BbvS1OCcFXEpgPpxaU7Y539e01Uhyek62mFwIro63u1a0HvnDz9OEwTmvZFw68XBgZvINR/nUmdJ2kcsperRySGZllHd/I41V7ZHnar8JndSYR+fG2j/1rtJkyj1fzT3wAH9/vo0UJrdCotb+9SoAsezhOcYTq/VYShSgf55MqSKuK1tCigzR4JSQw67OMz40MGhgXhIHT6TSEdY/a5qDOnIW5RLqYza/8HKLBHyPYNJzrOLdKWweEDKuOMEdkSgC0Vmzm7kJ488S1sv7NVsCupE+G6HYxwRE4BUlQGXMOUcagYOPSHdg7eT1t/UFrhwxaEsUnAfdgwF35lJBIerZfs1vqoIeN3Mw7NCz2zAv3+cZIRTE74xpW83PWgxNBdn1U1/ymHg2ztKArrapcAjGoT2ZivXbh014teDvn7P1m2RF7ocfKnmrNWs/GceVfNcula5CxWChmh8aZXJ45tjEtzBv42yGeA6PJV6TqxRhTloLxHkhqcyIPuHSwxjbXbMol0zGBEJiTC3cdbYI9G5T7AIq0HG6xC76BF1M7sl7enNPaXPJZC3zLR8sHP11huj4YOCUbb4RVUz8s5/HR8REJBJc5ncyvhPNHh+3ewl9BhollpPR0qcbF3MxAjKGjKSLswuHOmsSVF2qOlCeIKUeFkKsS9ERQZ0BpjZmj/c3s6mOXJPzIBiNAo/IeNXC1wzo6ymiVVl3CUz2slkfSvCAiE+dcSZ+WMsDFxwdE5r5PKrVPUsZol/kZhrEnWqzTNByna/8AZ/qkrpFt9uZ/ZcPB8wpzagL3XGtRuqdzL+ISvnaX3HNxE/lWsgtYpi4CPEZg9vDSDHcvMKNfotfam6pteW96sKg5/FvrfOqj9blzdaA0yeJW9fSFISXWsJYWuBMT5lE8UHdqb20UCRJ5t5MrvHcnrWrGtUwjqH7G5tZJx0R+TtP/Px+SV4XmvVaIafqnX8RQqJObCUDMZ6PxUUmxxw8/icO4GvK6ki5LVOiwa+O1dUUXPIq+nNXgrQBtIar+5Mkw7J4vmFnJ8YnSa1CobeElnnl/KtpisHvNFTWLyvMWizPPUMgGo6CO8MVQqsEeU/dHIdulbG3TYh0is/ol2sfPnBSSOqNoq38IZSjGw/RjZQ8SqjyIRyCKFxWmUUJm7KcK3JNlBDLHSoE3T+hzw0CGv07HA/xE0F3St7gdQDrt1nDjSpiYhV/5Qqz9SWAv1pssMCqzN/c3t06hTDHBp4Y4qs1ML9N8HG6NifGv3mE96WDC6zcO0Jlx3Ve76xUicEL7bjrFROHUpPxZh7oXUM4J7DYX3FQtutKFOScwHv3Zt1tNiXSAO0pfHI/2AQBfwZu+2N04poMEw29YV/DDU4N7EfH2M/lBYVquop+rIuWt2lqlQP/f0VVCOVf0U1+EsFJIqMeO3qktR+mPLjQiZmevt9ZylyGbhiIVpIrXIetFkNzS4leM9xT2dw6P+Orj9iufGv1qN67ibb2E8/N5TOJoz8clxNfqZo4XwQt6U18C1C/ET1pqPb4nYk1i+Yt5XjfyLCK4XC5iKe+xRVTgSqLctdllFk3MbVaoLIwn603k4jyGawaUfWDND2WTIgkg9UePYKJ+G2AOciN6T3r4gGg1782Swvo97tqMIsuyiCgHLXlSUsABSle56D7wgXpXBxPJ+AiXsWjfBoNb5yyOeiQvfmvs7OMLS+2yJ1XuABkJTSDeDb7Bq1XUQAlJsbacgjB6debnY+UlMYYz+hjwpBqmfK8aABuhasbU/FA6rU/helwQMmrbo3ew6ERVvzayxFXkDrk9QJ08jugCg4i+UEjL2Al+cVu/m2LRrouiSi/XcJYjQ65MODxHgdHxRbYcxUqLS8lsX5SSefDJOiQOnncyT4QXdKncwyT1Ll4kuKZx3biHvnlJTlpkowTpNggu8J7Ci9tzy1/wLhvKJTMM4EvqtNkwVt0x5YJRm7b8qFStgEsenpZR2gSGRXNiQPyeDLg82CxoV49wuLi4JkWiC4OxPSdKr3cN2KKC+jNY0wFaRHItq5cu2Kw+l5Vw5ZfLo3uAXgTDQYJJR8+6JbetCQLT3oQZMr+0YJGF40tcyI4eBh+/utyVAvzd/elA35J3IJpqZ74Q5yMOKwGWoohTlHc1LsSReOClLLMuxqbzGwb45xzjHGu9Y0iPS776J9yrymZdgKUmNpMBXnrHxM+mzyrsyxOAqAzaYd4OLDhZoqC8BvVbMFzX8a9f3o56bh8XkcySw3ruzFxFcLodEvOeW+JEtpFVgYpLBYs7pB/6bET62RqA3oD20ASHT6OI5s/L6p1OdjKp709O89NjsqSVGZxy4eiL6eOOR2vsJKSHuRCBkEoHhR1TxRYS85AhHhsVNwWMKjWzj4clzXTHCGOhWRGcI8i3PxGE0ypCoqic8IN51qenOcVvGAfn3kZMQIGgn2PRMMdH+50JFaQOyuwOMu0WP1aLUa1RVewVxnaJl2C92fZGqnTLDU/TXPe6nzUNzKnwKNbF36SqU8wL9yLX9g7cnBQiUVeSl1GyzkRP2Ly01BYyM2b6JITE4nfmLQ9p5kom7Cwuahm0K0fX8o4n8EZjsdvG2L76aU7L6f8twPzWMHqG2U7E2N67cxrvvqHgGJHV2N1O5UDE7YJp9t2U3fJavm3WK0JJlAoX3zaxKXlhFNuc2uAJNKthIVCt1E6IsoIt+LxzCmVEfFEze59bXUr/I66LCSHpmcGPFDkJg13gvfwDq+dCxcSkO+ua2uvLNcagyiwvTP4TiY1YPvqq/sTyj1xcQJ7SL2l5bp1Kg1Qx6JIoPKKIJwioaC3Zvj0vTrszbPxHTMUqt6YBmYBD39si86eMQ5KqLgcTDKon+ZpPuu8cRzj6diaYBxlOCleFCsZLd3BdTHfu6zqFtAKXI+zjYV1dfxIG4wKnq3vd44esVbp3cQEIQdjVQ67hfhYGq5y9y9bD+mCdCfynkEV2XaO1v3WvWiCCMhSSbf3VONebeAsWgi5h6K3vU+wjLcx307vnlCrdpMOhtGZQZsRSY5ozd7Zlj0y2tX9Yzgf2i0OLjtPppQBsgcj4NJ0S2dGzq/TdYEhQyUQyUeQ05phyde+Rrs4qVLhCus/LkkLd6s1m5+qy0afPBk0iVurZAyJUlKs5EdI5NqhObYS5A2csO8qzvGEgzH0xcWNtqxF6tsnFQXtg9eZyONLTSQqYNCsWSF7nJ06drBDjDKho06Vvpnl6jLLFwSclsFRWXb8GrBwhOITLV7wOTSbBImjVwpg0WYkY02heo3D0TIFQi7ZyqMqxtohnL071M4SrM0bP1QSJsuqzr+nQDQbid1pMAMf5oEmMY059l3i5CLMvIMdgDXWfGFNaBVxX4rkzQ74iZg2E230nmWs/gqfB959S8xsAa3V2x+dRHxTOp0EG4qzHM3U9inNWgUWIDYz2JMR/uSh54e6qimQV3GFEn8xSsbCvRB0nCmMGvN896YjV3aU1/9g91eVuxxl8ZTk3oOxoh141DRrfeZPs4U5oKtMkz+UdDd7YDeMbmSMbhehRE6DH7Vy4vF6s+MVw9BlM7VTku1Re4Y6Jofcf8C6v192mtQmfqGfcn396RYCjSfZI1fVvybHlahB1oHvaBxtQP/y3ZZnQAeGs4VD4IPVa9h81OoD0DoKudrHWFitsOxCs2tpn16uKNHUXBQ6gmq+XGw/qOeBtmqPSvTug7OOEKrRi8kGGkSkO2eOAQN6/ctk/Dp10WFhVjEywolXfPtURZpkf6HEuij5b1HRiI3pi3K4Tz6QLfE+e5crgJA05ngZHpDrabUGwENAF3rcnKv1nHpmgtj3FhhwpmRCh64xu7uBhglWkX4QdMagm8W6No1qTaXO8XuczGnyWtoqjI4aUwlA7dSpxn6KL6oFsDaCBCAfiX0tn68QtGw2WOqQXz5I+wCr4lWBMVGwEkmAhlYdDcup5ygHMJ3Hv/rvb/h94GFxObU3JQYyTsWWiERM8qQsPJGZfu6qN4WjaJWcsKxZnWl4qcEb24ccHeGlK+WXaK90EoBjtOLiM1lc/4p3ygu1Ce7al2MSCGU2PNQ+PJxPTeuqHoipmB6B2QNQllZVYPTbyDv6Lmea4yNPZvrQzpKd/0urG/sab+MQBMY12rD+SSh54cv+eHNugOCA1WA8l1mcemdwFDhEZhNC8xhw+o7KcQYOEZcGotrfgmeuDw/6MNfVTrAVKFxKS2bZRooQwbNbuG4qCHBMfpznW2Y5q0GCVsG7Pxp1Txmneairx0g/nV2b6EWl4UBBEMzMZrM4D3dHt3V+S1cenNyqiEl+Sv1DLnYlTIg6MUV1xp00BAVCKwmlIw/t0szBvHPTocrbwflEOTRZ6b/38bfhym6YoR1jkbO4uaEWo6kU6bNKLRdesoviSH7cQcpj2kkagBN4ANYHUPqf4zCkYfwhKi+9pPwOHhInbJRW211w5jE35w3OiGqowJYrcLrAiW4T1x5JgVLP9B+oDzkaWwz11tfSpyerbG/0EEY01ozjwM27nLvlfXR5HO3YaMn6dvoi4PThN5ksvXTYzvAML5N8GvF/eYXiNiW+cmwZn7ga7pQVM7p9MvM2317ok4J8g67wlMjrt99wFXDwND88L+0NwMSz57V9GrFFUYLGfETbzlN8s7/jyNqnIt9S8FISz/urlYcb/BvqT8x916IFGifEvcyOLUye9cen12ED4YC9U+7LoMHEVEDZO+PjeRd28yBdzQAmNakX4bMEADUTM6ISpXxkb0rp4iGTCYWE2MS1BguGOMsz0tJ17UAXqXeyGGwlaqMJCIMLJyV1Uh2+5VBYF+FEe/KIPgO5isuZ6kXJQkeepgtb1qGaTJR29TDtc+I+fAssyohdCdoNaLKarbEKGY9tCTuteJRBgn5J1V6KXQSjYd7mWvsXCIjZ00dyJh4cJL9Xj/RYRU3kq3K3YblpvkPG3rdXZAyaSAlIj7f/6uC+WzC7yAdcTbaPFRbeIayzLZDwgAu1vxRQsqV7+QIOUa4UrgGddu5JZP9XaErmewlmgX0hvZzQas5AR6Gd9iRt7ajxR7xJxJD57C/csLZPAmc6Cmulkcn+eKOAbz7jNBbS2zzhB6wlX9XtXIefD/nIU6uSFghEkclkyUHpdDAtHEqDaNFoOE877UN76q77bBnPAL3wxoeBNT9sUMiTW8wtDia4IaZT3z3M732Yf9Z7vKBNBH1rS1QgjUiumCM9QIJWd05qh0HeK52EVNLuvoc+XA3AcGTC74T1H/8BgEE9/NHeCGUUDVmtzwTN9XAoAK5H2mTTqp978obUkcahiGyueSzV96gJ0njldFy2ai54e/c8P/O8hrQJSX3JrgH/txYe+iNkCDnyxm/O/Ob8lxiKnLkQhoYMwhUedgsfvl4N+bOlApVjbzn2BpBFtXgPVHeBc0gW3UbPCToWKB4duC185wMHoicXOSlhpHvKl/kKfOCKUAsf3rsZns97relYzpzGacTT4GLNsOojRDTxRdYAQO8dJj3o8gVXhDeoN7DXJYIcYwtMUY7FyjCbjSsPX5zCHeHWGX35+O60d8GpagES+Rh4Q8DjlupViNYzhGFV91xy0jnpFAKk1m1Icva0ml2kq1jQllY8A+zfeKzLkCupizCjxlcnr01fmlH/xb87WCMFUBPt9ujUD+eGRWRX6IdbNpMKjjqE/MqT7bquvEWIzKQdKCRDSTrwoq8oAmP5/+6iPwR9FBfY0pulD576FJEBkHsWLySLnd2K1OVZvYd8Ql0MNbrfCcHLboT1WWPuYnVn8bBj8FXj15DkSSn03NKGRtQ2j8Fld06O7buKzJsRxWasFYSO6uhrbyGTN7Nvvswo8z6iDvrHWM5bCd+A1AjzNRdxasYYLFnhIy48VyVocsWZ++jvvRhR/2bbtuOqQaFxS0pQtZ6/bD7k34mSvBBiceWfpafSM5u67SgDNn8R4HTRijwvSyAVTlPQn6zxAVvaUWb6tFA6MPc9wmbNU4UfCWM6Qkzfb2TCRPaJpJuPJOJKEiBAjn5ZYNV/JW4B9ta3KhF6Yj2dhevq85VsDXlocORDjDjosRpWwPRztRENYnYMCywjVia3zQUc4XEzLo8fIcsTmpW+lBaqWdaGtksXnOO0d6Ip7UqKf/4s3XgdLoqGeWugmcLt76I1aBeFDjwS1YXQCuYdCem2ypf9Ted8VoCZwUc2pHdWNP1jiaPT302T0xEMO8ytEih6ghGxiZGKb99cX6MVfelc4E3pmS3F3YQNp1U7XeBMA4visZ+7sCJ9QU4NJ+lVTqIOPWron4lK9CK8IeII6YnAmtZAGO6n2JTAKr33TJCV23cOz1jb91GDx45SedwOxqM3dKEaKK6coQ22D0LmDhgpcgynKek1Gbb42GYN02Gt52ePMk1gqfvxuuH7MaZCKhrL6t++9BqouvN7lu1z8IzTbwthYddGR8ZvTK53UUXtLdDbEb0P1vRzZe85gwUJHL2L10a1+LdmtDW7rRP69LemQpZlsBvOOB1DzvyuXJTOZEw21HPG8CxQeZBaYRrPDp+LR3U3pYW/yCJRWDYkEqcDlIIVMwkL+13tnbURCmLJHKJ2VGXiU5GkGXjJwENNyy1gPHrLo7EY1Eu+AYvJhLwhSV86zsq8qyiUlFk2qpBXGfNgcjZPWycvRutgcMIOHLbmxY1yR1pIshsOsE721nljjjn/9bslkJ66D2CUMPob1zdFFgqlbwko+HWbtp1vLC0BWbxDkZJ1+mJ6WpTuoiLnjA2HtOkRjCOO6T0f011H1cO9ac26RR3c9vKgCUAiFy44tWRVOJN1ucxerS9Qz7/FTMAbenQLmMRyOBOD1qqEM2XPplRES8/u2yMnkIGDfbWjtieJnabklOYnOyQBXSR8mClB0+4NWX0hnmP5AVgdP5mJM4nJT9K7oK0WkAwUibH1f2jh73YGyM+IF/8A+akIMedYBIqQ6vEzFnB/CC/dXWVv6xVirotrYXdEbM2X1utZzb6H4Hrp8fo5Bg2/s2F4ycAnDIh88D6XGXM0KFv8mKzAZMPAB1M0x1iumEzLVF1M6F0nOXU6Sl4SKA9ZvHyWq1pKhpT+vvs0WLyWwieQQHqcvk5R9tg3Uwf/x8FDz4rFgxzOz08hu3vAo/PyQKswFXSG/BvFSMER3pG7JPvNgH8CVeoViZgKHlJEN6dfOGOa/r4xRcf8PO11nxXkPmtn1EWvjsuXfO7W6UNPNvtID4Uf9VlANRT68fD8TvtZabggUQMJoZBpRWQjDiCAhfS78fHV5sSXjvsnHjPW3d3DHGXW8j1NOicBELsU/Mw8HONEmTWEUUwgKpZPBXTxPj21VqRqOX4EUo3+asokbFbXheIJCm7DsFrqHh2UPObqsNi8gSzKPOZnHDFnVlNf/EsodMokX2yt6Q1q6cMvwxSBjg88TSZca8VDjmXxVgEUQkQ7PbSs50/yRF+uQ97O7Oh/P90IVxJ7nhAK6uzaGnH/+DVuoRr9h7tvekDA//u9sjYxYm3pqOLpVJ7Q1g5z/i4zQaGTt+InlaF2eJ00e0+b8z6NE1G6PnPE2uh4mlHFgF0WaPMficQKqZCziyEtC9fDFF3Thq8Vq0xI2RpZli4HMDCcekSKyVqCXHhOk5CK0Okea7hncjZ4mguQRC5iATd8hmx5RU5CUUxzl5E0/My5ukfPD0UgsslD42hsdYNo+lrsvzQLDjGn202OBF11HrFKB6QaD/KX4fxQSeocfZJmFs8GgNUgxLIoml+sGz4FnxVFKXLZbbSeaIwlDE6RDUyaYl6bNejanF6VqOW/qzfGpDqFrgMRpV9cUEWxth60E3xxIhMiug3Q6EF7ah6z/4m0KDJaFOf1rid2egXVGMgfIFNk1c6Wcdh0kUfGVv0tH7L0VD8bi5Vz6sUwIHrY67LQbfp7bXPl7TKdAKx6tvXF0DjpA9+T0DiA6/LS+577wTlarT9eJ0yFa1Wq850rywg/ntIuhw8E9Gw3+HS/w2lLSlR2XijqiG9IzBcqqnEWDvoP9QjgP27UDuUIm2Z8Bm/ZpBQCCp+IUzm3Lidyy22qHNacDvhHbIZ+sxtM1/OohWsGkKoXYmkMFL2zV+1Cx5CgtX3n8u1INDl1Yty9KL79kS8CBUZtHSX4W61t3CnVjXEPRBFwPsEJJMBaEFgCz8h8Zj0IXQv2Qf6n6MTHxAh4919Cxxf8BRQgsWWDiydNUJXiOFxQmUtHSaDJmdUOkEknahdSG/dfwTqSIai9DyPas171lOQIYkPZVyAOf+pFsxyBYEG1DbKKAYweOes7RtxRy3D17iZ0sxwNxOL7BZypCw9vgFBdeTttQgYR2cE8AcxlbOsWCnZuMoecRz6gKVRbY6qVKE0sL3dHYTv2lfkZBHIAptzCM3vyHFrenj3t4BLWLxfQW3y38K/d2I5wRaqKx6rk7k66odvX8mwce4kT9OUxq08qhlxuiztKQghOCS93pqlKV7ICjltbgZCn9QQY4mCydXBgBAA11uB1OELMcuxWSm91HguL6QNvtb2EfvZyOpXTOd1d1iqeP7c8nT8yVrZtuf2qZLZpKPDC6rAXsQQaqbnCbhlWBU4w3JaR3g14QnrSrso2IDYJkkkh8mnWtzD+xRtb+VGiNCCRqeMH1/IRsU0JKx31R9wIxYVLMRCO4HzVsEN53V43ejs5VBk+fhVyFSQUlauZ8Za/91KPHGbqCo8k4bWC05FgBKeupmcfzCsocKrQtAt3BXtXQutRiy3RLfUFWv/psuvdrRsUgIF0I5uHMdo20/hs1V1ZyplQfYn2eJWYXDE1Eji69tOH2PnW88uhUywSlVQEqwnannhxa59XuHBAOwpXTMUFuqe8obZbyLp0oUBZxVGDJ5b6L3hLYTcC2RZheVoX58s7ur3w5bZmSkFHuzOtou0TjG5JlXX2dVCNl4L6HczxZB+wOqtZlQH6A9litcWPwZzd7PTRHDEPL3G4RCgDjkrTZJb5jM8/yjbqudxbUOvbOgv11fRRNlxDbfpxqkrbmtMENoMhQxDOvA9/rb76I+WQNR77qUQkH11FQFZolIhQ1xLbINX0eMk5cLO0Ty+3YqvQWC1YSYpOzCWmvZXfw4qe50aEKp6vM7i3pmOCzny0/MB8dmTqqzn1bVUYBRZ8kBxpfaDzE5XKIqTFo3NPTzkXOmwSbx0vQZmqccaOa9UT/nDHFS1xhpJaP3jLcDcnuK/i6kqVQabTRxHb136JUYWm49a5LSYN1amXiUDrxBm076Nl7K2ZPjw79PQeCfKLLtL1ZubS7IAjMUUMYfiJ+jGmFNWGRXX2Cx8cp2eo77XlOBYO+EKnMjttZks9xxtPyGx/J1VoJXC1rtzo9s0X6tKkDf3gwmvBiFxPyDX10a7ro9p0/O3q+8rZ/W48MCI/H36I5WEKxyhj4D1JfJYI/o8CzYmmS5gZpXoyVyEoGz4yaZVahdb5fJ/86sBICif0R4gyjouHGcIkX2OtmhCtetPpoiUZdhfvJmlCaj++c91roZBgBFzuPdFelU8WnzerCjlwSAWaj7T0toNviPCJezf367t5/LU6rAyL10xBzLGcLsZ1lSv9SrrbmMbOSv4x8W9Xk1j2zcypxxpbUGy374nlX/Gd0UjA4P8wxmNiPS3wyHCq2kQVGIDiKHn+wm4IN3RTRQ/b3hvAxcakGpeyxjEbyXR/lYFo1ccB/+FhVXA2+p0QuCdub1YjJyUj0+oargNAD7a/+9icOtcR8c+HKkOWXJdfG13X3bBAwUDM45iTv/d2bLLpeOOr0Z6D42fiDYhA6g+MQbUcr4N7z8ogLW9cTn+so+lKYF+cj8icduSkyaE0Jx23LY1aAR6tu855T2Os8rwSaFBQk8CWXlVhrGMBRJWvFhA5VrakCKuAKXO5rbeOw4LBLwSQeeeuGC9y50r3WNZREnessa0kEQ7xoY3MMuEklv8r0rQS0iEsazikX2V6IUqw4fxcOatF/3XMZy5sa9QJQ/Yp7bjC8qqOl3ZGD86APkl///Uwk4Fv72Cce8sGaDuAdD3dJj8OFSRop1rE2v+QPBLjzPCMdOEyQ2fqpLRDyt6UTGAmGM/PZO/gB6Wgqv9DGISskg0mOIGiufqm1/GEHOi3oBQkGeymTibIWcok2Z4+3sUSoyETIcGTK/nlH4hT5dmt9psWvyv5NqVY47Ig+BT30wTr6ZQxamHgut73bfXlQ45b90Vdt5tTluC2rqzRiGSu2Ast4OplBf6fY8BAcfG47wp0YkOcGg8loUSK1PnLot7z5fZKGiPkfWXFsl8td/+F/hFwnAU7CxkrWqD4KL0mPfEesSthRi76w7kcCIIOq1Ai74AyWRJq7fDjHJuC8lnFtmxAIqzFXMKFEaLl0N+n66b71D3M16LMwOX2tNiPJIN6q4o31/IauNBplHUgBPFSaL27Y92t0DjOFM5fbfeOBSkC5LYRFraH9h1+ZKYqCMcS4IeW7t4ALQpV10uOAHzq5222wdSPoUpsd52AVwRrGq3bYZ8SWftWLbpRttVkoUkbyLVQhJiFe/B70Ci9TDIe5xvsWITpIxSgOsEB1dB5D+zekatdsVPpkdyAHfsg2kuj+5N2Kpvf/bIAPdO5hO9zLfi1v58Fm76pvuQhnCLZ+zuGU4JNGQerJhgpVo+M+BEAmpJUaoiijpPpSN6bCJ7Sx7SQG8tUpvxD";

/**
 * @param {ArrayBuffer} data
 * @returns {ArrayBuffer}
 */
const sha256 = data => {
  /**
   * @param {number} a
   * @param {number} b
   * @return {number}
   */
  const rightRotate = (a, b) => {
    return (a >>> b) | (a << (32 - b));
  };

  const message = new DataView(new ArrayBuffer(((data.byteLength + 72) >>> 6) * 64));
  const u8arr = new Uint8Array(data);
  for (let i = 0; i < u8arr.length; i += 1) {
    message.setUint8(i, u8arr[i]);
  }

  let h0 = 0x6a09e667;
  let h1 = 0xbb67ae85;
  let h2 = 0x3c6ef372;
  let h3 = 0xa54ff53a;
  let h4 = 0x510e527f;
  let h5 = 0x9b05688c;
  let h6 = 0x1f83d9ab;
  let h7 = 0x5be0cd19;

  // deno-fmt-ignore
  const k = [
    0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
    0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
    0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
    0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
    0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
    0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
    0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
    0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2,
  ];

  message.setUint8(data.byteLength, 128);
  message.setUint32(message.byteLength - 4, data.byteLength * 8);

  for (let i = 0; i < message.byteLength; i += 64) {
    const w = new Int32Array(64);

    for (let j = 0; j < 16; j += 1) {
      w[j] = message.getInt32(i + j * 4);
    }

    for (let i = 16; i < 64; i += 1) {
      const s0 = rightRotate(w[i - 15],  7) ^ rightRotate(w[i - 15], 18) ^ (w[i - 15] >>>  3);
      const s1 = rightRotate(w[i -  2], 17) ^ rightRotate(w[i -  2], 19) ^ (w[i -  2] >>> 10);
      w[i] = w[i - 16] + s0 + w[i - 7] + s1;
    }

    let a = h0;
    let b = h1;
    let c = h2;
    let d = h3;
    let e = h4;
    let f = h5;
    let g = h6;
    let h = h7;

    for (let i = 0; i < 64; i += 1) {
      const S1 = rightRotate(e, 6) ^ rightRotate(e, 11) ^ rightRotate(e, 25);
      const ch = (e & f) ^ ((~e) & g);
      const temp1 = (h + S1 + ch + k[i] + w[i]) | 0;
      const S0 = rightRotate(a, 2) ^ rightRotate(a, 13) ^ rightRotate(a, 22);
      const maj = (a & b) ^ (a & c) ^ (b & c);
      const temp2 = (S0 + maj) | 0;

      h = g;
      g = f;
      f = e;
      e = (d + temp1) | 0;
      d = c;
      c = b;
      b = a;
      a = (temp1 + temp2) | 0;

    }

    h0 = (h0 + a) | 0;
    h1 = (h1 + b) | 0;
    h2 = (h2 + c) | 0;
    h3 = (h3 + d) | 0;
    h4 = (h4 + e) | 0;
    h5 = (h5 + f) | 0;
    h6 = (h6 + g) | 0;
    h7 = (h7 + h) | 0;
  }

  const retVal = new DataView(new ArrayBuffer(32));
  retVal.setInt32( 0, h0);
  retVal.setInt32( 4, h1);
  retVal.setInt32( 8, h2);
  retVal.setInt32(12, h3);
  retVal.setInt32(16, h4);
  retVal.setInt32(20, h5);
  retVal.setInt32(24, h6);
  retVal.setInt32(28, h7);

  return retVal.buffer;
};

const encoder = new TextEncoder();

/**
 * @param {string} password
 * @param {string} data
 */
const decrypto = (password, data) => {
  const base = new Uint8Array(sha256(encoder.encode(`${password}0`)));
  let i = 0;
  let hash = new Uint8Array(sha256(base.buffer));
  const arr = new Uint8Array(atob(data).split('').map(x=>x.charCodeAt(0))).map(v => {
    const retVal = v - hash[i++];
    if (i === 32) {
      i = 0;
      let g = 1;
      for (let j = 0; j < 32; j += 1) {
        g += base[j];
        base[j] = (g & 255);
        g >>= 8;
      }
      hash = new Uint8Array(sha256(base.buffer));
    }
    return retVal;
  });
  return [...arr].map(x=>String.fromCharCode(x)).join('');
};

const password = window.prompt('パスワードを入力')?.trim();
const rightHash = '3328236998 1223133385 1997979040 2003998519 770592933 2615719006 4294551868 748931136';
if (typeof password === 'string') {
  const hash = sha256(encoder.encode(password.split('').reverse().join('')));
  if (new Uint32Array(hash).join(' ') === rightHash) {

    const blob = new Blob([decrypto(password, source)], {
      type: 'text/javascript',
    });

    const style = Object.assign(document.createElement('link'), {
      rel: 'stylesheet',
      href: './main.css',
      onload() {
        const script = Object.assign(document.createElement('script'), {
          src: URL.createObjectURL(blob),
        });
        document.body.appendChild(script);
      },
    });
    document.head.appendChild(style);
  } else {
    window.alert('パスワードが違います');
  }
}

package com.ironyard.entities;

import javax.persistence.*;

/**
 * Created by jeffryporter on 7/7/16.
 */

@Entity
@Table(name = "band_managers")
public class BandManager
{
    @Id
    @GeneratedValue
    int id;

    @Column(nullable = false)
    String instrumentNeeded;

    @ManyToOne
    User user;

    int rating;

    @OneToOne
    User selectedMusician;

    public BandManager()
    {
    }

    public BandManager(String instrumentNeeded, User user)
    {
        this.instrumentNeeded = instrumentNeeded;
        this.user = user;
    }

    public BandManager(String instrumentNeeded, User user, int rating, User selectedMusician)
    {
        this.instrumentNeeded = instrumentNeeded;
        this.user = user;
        this.rating = rating;
        this.selectedMusician = selectedMusician;
    }

    public int getId()
    {
        return id;
    }

    public void setId(int id)
    {
        this.id = id;
    }

    public String getInstrumentNeeded()
    {
        return instrumentNeeded;
    }

    public void setInstrumentNeeded(String instrumentNeeded)
    {
        this.instrumentNeeded = instrumentNeeded;
    }

    public User getUser()
    {
        return user;
    }

    public void setUser(User user)
    {
        this.user = user;
    }

    public int getRating()
    {
        return rating;
    }

    public void setRating(int rating)
    {
        this.rating = rating;
    }

    public User getSelectedMusician()
    {
        return selectedMusician;
    }

    public void setSelectedMusician(User selectedMusician)
    {
        this.selectedMusician = selectedMusician;
    }
}
